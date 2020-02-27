"""Init file for Supervisor Audio RESTful API."""
import asyncio
import logging
from typing import Any
from typing import Awaitable
from typing import Dict

import attr
import voluptuous as vol
from aiohttp import web

from ..const import ATTR_AUDIO
from ..const import ATTR_BLK_READ
from ..const import ATTR_BLK_WRITE
from ..const import ATTR_CARD
from ..const import ATTR_CPU_PERCENT
from ..const import ATTR_HOST
from ..const import ATTR_INPUT
from ..const import ATTR_LATEST_VERSION
from ..const import ATTR_MEMORY_LIMIT
from ..const import ATTR_MEMORY_PERCENT
from ..const import ATTR_MEMORY_USAGE
from ..const import ATTR_NAME
from ..const import ATTR_NETWORK_RX
from ..const import ATTR_NETWORK_TX
from ..const import ATTR_OUTPUT
from ..const import ATTR_VERSION
from ..const import ATTR_VOLUME
from ..const import CONTENT_TYPE_BINARY
from ..coresys import CoreSysAttributes
from ..exceptions import APIError
from ..host.sound import SourceType
from .utils import api_process
from .utils import api_process_raw
from .utils import api_validate

_LOGGER: logging.Logger = logging.getLogger(__name__)

SCHEMA_VERSION = vol.Schema({vol.Optional(ATTR_VERSION): vol.Coerce(str)})

SCHEMA_VOLUME = vol.Schema({
    vol.Required(ATTR_NAME): vol.Coerce(str),
    vol.Required(ATTR_VOLUME): vol.Coerce(float),
})

SCHEMA_DEFAULT = vol.Schema({vol.Required(ATTR_NAME): vol.Coerce(str)})

SCHEMA_PROFILE = vol.Schema({
    vol.Required(ATTR_CARD): vol.Coerce(str),
    vol.Required(ATTR_NAME): vol.Coerce(str)
})


class APIAudio(CoreSysAttributes):
    """Handle RESTful API for Audio functions."""

    @api_process
    async def info(self, request: web.Request) -> Dict[str, Any]:
        """Return Audio information."""
        return {
            ATTR_VERSION: self.sys_audio.version,
            ATTR_LATEST_VERSION: self.sys_audio.latest_version,
            ATTR_HOST: str(self.sys_docker.network.audio),
            ATTR_AUDIO: {
                ATTR_CARD:
                [attr.asdict(card) for card in self.sys_host.sound.cards],
                ATTR_INPUT:
                [attr.asdict(stream) for stream in self.sys_host.sound.inputs],
                ATTR_OUTPUT: [
                    attr.asdict(stream)
                    for stream in self.sys_host.sound.outputs
                ],
            },
        }

    @api_process
    async def stats(self, request: web.Request) -> Dict[str, Any]:
        """Return resource information."""
        stats = await self.sys_audio.stats()

        return {
            ATTR_CPU_PERCENT: stats.cpu_percent,
            ATTR_MEMORY_USAGE: stats.memory_usage,
            ATTR_MEMORY_LIMIT: stats.memory_limit,
            ATTR_MEMORY_PERCENT: stats.memory_percent,
            ATTR_NETWORK_RX: stats.network_rx,
            ATTR_NETWORK_TX: stats.network_tx,
            ATTR_BLK_READ: stats.blk_read,
            ATTR_BLK_WRITE: stats.blk_write,
        }

    @api_process
    async def update(self, request: web.Request) -> None:
        """Update Audio plugin."""
        body = await api_validate(SCHEMA_VERSION, request)
        version = body.get(ATTR_VERSION, self.sys_audio.latest_version)

        if version == self.sys_audio.version:
            raise APIError("Version {} is already in use".format(version))
        await asyncio.shield(self.sys_audio.update(version))

    @api_process_raw(CONTENT_TYPE_BINARY)
    def logs(self, request: web.Request) -> Awaitable[bytes]:
        """Return Audio Docker logs."""
        return self.sys_audio.logs()

    @api_process
    def restart(self, request: web.Request) -> Awaitable[None]:
        """Restart Audio plugin."""
        return asyncio.shield(self.sys_audio.restart())

    @api_process
    def reload(self, request: web.Request) -> Awaitable[None]:
        """Reload Audio information."""
        return asyncio.shield(self.sys_host.sound.update())

    @api_process
    async def set_volume(self, request: web.Request) -> None:
        """Set audio volume on stream."""
        source: SourceType = SourceType(request.match_info.get("source"))
        body = await api_validate(SCHEMA_VOLUME, request)

        await asyncio.shield(
            self.sys_host.sound.set_volume(source, body[ATTR_NAME],
                                           body[ATTR_VOLUME]))

    @api_process
    async def set_default(self, request: web.Request) -> None:
        """Set audio default stream."""
        source: SourceType = SourceType(request.match_info.get("source"))
        body = await api_validate(SCHEMA_DEFAULT, request)

        await asyncio.shield(
            self.sys_host.sound.set_default(source, body[ATTR_NAME]))

    @api_process
    async def set_profile(self, request: web.Request) -> None:
        """Set audio default sources."""
        body = await api_validate(SCHEMA_DEFAULT, request)

        await asyncio.shield(
            self.sys_host.sound.set_profile(body[ATTR_CARD], body[ATTR_NAME]))

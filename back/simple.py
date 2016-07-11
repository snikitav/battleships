#!/usr/bin/env python3.5.0
"""Example for aiohttp.web websocket server
"""

import asyncio
from aiohttp import web

import aiohttp_jinja2
import jinja2


@aiohttp_jinja2.template('index.html')
async def handle(request):
    name = request.match_info.get('name', "Anonymous")
    text = "Hello, " + name

    return {'name': 'Andrew'}

async def wshandler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)

    async for msg in ws:
        if msg.tp == web.MsgType.text:
            ws.send_str("XXXXXX, {}".format(msg.data))
        elif msg.tp == web.MsgType.binary:
            ws.send_bytes(msg.data)
        elif msg.tp == web.MsgType.close:
            break

    return ws


app = web.Application()
app.router.add_route('GET', '/ws', wshandler)
app.router.add_route('GET', '/', handle)


aiohttp_jinja2.setup(app,
    loader=jinja2.FileSystemLoader('/home/vagrant/battleships/front'))

web.run_app(app)



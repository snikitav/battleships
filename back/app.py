from aiohttp import web

def init_gunicorn():
    app = web.Application( middlewares=[ aiohttp_debugtoolbar.middleware, db_handler(),
        session_middleware(EncryptedCookieStorage(b'Sixteen byte key')) ])
    aiohttp_debugtoolbar.setup(app)

    aiohttp_jinja2.setup(app, loader=jinja2.FunctionLoader ( load_templ ) )

    union_routes(os.path.join ( settings.root, 'gunicorn' ) )
    union_routes(os.path.join ( os.getcwd(),  'gunicorn' ) )

    for res in routes:
        app.router.add_route( res[2], res[0], res[1], name=res[3])
    app.router.add_route('GET', '/static/{component:[^/]+}/{fname:.+}', union_stat)
    return app
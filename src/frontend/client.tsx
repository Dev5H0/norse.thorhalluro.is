import { Elysia } from 'elysia';
import { eden } from './eden';
import { html, Html } from '@elysiajs/html';

export const www = new Elysia()
  .use(html())
  .get('/', async (ctx) => {
    const data = (await eden.api.json.index.get()).data;
    console.log(data?.find((v) => v.slug == "loki"))
    return (
      <html>
        <head>
          <title>The List</title>
          <link rel="stylesheet" href="/_public/css/styles.css" />
        </head>
        <body class="container bg-green">
          <main>
            <ul class="list">
              {data?.map((v) => {
                return (
                  <Html.Fragment>
                    <hr class="double" />
                    <li class="list-item">
                      <a href={'/' + v.slug}>{v.name}</a>
                    </li>
                  </Html.Fragment>
                );
              })}
              <hr class="double" />
            </ul>
          </main>
        </body>
      </html>
    );
  })
  .get('/:slug', async (ctx) => {
    const data = (await eden.api.json({ slug: ctx.params.slug }).get()).data;
    console.log(data)
    return (
      <html>
        <head>
          <title>{data?.slug}</title>
          <link rel="stylesheet" href="/_public/css/styles.css" />
        </head>
        <body class="container bg-green">
          <header class="nav-home">
            <a href="/">HOME</a>
          </header>
          <main>
            <div>
              <section>
                <h1>{data?.name.toUpperCase()}</h1>
              </section>
              <section>
                <ul>
                  <h2>Relations</h2>
                  <ul>
                    <h3>Partners</h3>
                    {data?.partneredTo.map((v) => {
                      try { return (
                        <li>
                          <a href={'/' + v.slug}>{v.name}</a>
                        </li>
                      ) } catch {
                        return "test"
                      };
                    })}
                  </ul>
                  <ul>
                    <h3>Children</h3>
                    {data?.parents.map((v) => {
                      try { return (
                        <li>
                          <a href={'/' + v.slug}>{v.name}</a>
                        </li>
                      ) } catch {
                        return "test"
                      };
                    })}
                  </ul>
                  <ul>
                    <h3>Parents</h3>
                    {data?.children.map((v) => {
                      try { return (
                        <li>
                          <a href={'/' + v.slug}>{v.name}</a>
                        </li>
                      ) } catch {
                        return "test"
                      };
                    })}
                  </ul>
                  <ul>
                    <h3>Siblings</h3>
                    {data?.siblingsTo.map((v) => {
                      try { return (
                        <li>
                          <a href={'/' + v.slug}>{v.name}</a>
                        </li>
                      ) } catch {
                        return "test"
                      };
                    })}
                  </ul>
                </ul>
              </section>
              {/* <hr class="double" />
              <section>
                <ul>
                  <h2>Notes</h2>
                  {data?.notes.map((v) => {
                    console.log(v);
                    return <li>{v.note}</li>;
                  })}
                </ul>
                <ol>
                  {data?.links.map((v) => {
                    return (
                      <li>
                        <a href={v.link}>{v.title}</a>
                      </li>
                    );
                  })}
                </ol>
              </section> */}
            </div>
          </main>
        </body>
      </html>
    );
  });

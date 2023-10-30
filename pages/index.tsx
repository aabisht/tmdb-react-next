import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { useSession, signIn, signOut } from "next-auth/react";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layouts from "@components/layouts/layouts";

const Homepage: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { t, i18n } = useTranslation("common");
  const [loginResponse, setLoginResponse] = useState<any>({});

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
  };

  const changeTo = router.locale === "en" ? "de" : "en";
  // const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en'

  return (
    <Layouts metatags={{ page_title: "Home Page" }} t={t}>
      <main>
        <div className="">
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
          <div className="h1">h1. Bootstrap heading</div>
          <div className="h2">h2. Bootstrap heading</div>
          <div className="h3">h3. Bootstrap heading</div>
          <div className="h4">h4. Bootstrap heading</div>
          <div className="h5">h5. Bootstrap heading</div>
          <div className="h6">h6. Bootstrap heading</div>
          <p className="lead">
            This is a lead paragraph. It stands out from regular paragraphs.
          </p>
          <p>
            You can use the mark tag to <mark>highlight</mark> text.
          </p>
          <p>
            <del>This line of text is meant to be treated as deleted text.</del>
          </p>
          <p>
            <s>
              This line of text is meant to be treated as no longer accurate.
            </s>
          </p>
          <p>
            <ins>
              This line of text is meant to be treated as an addition to the
              document.
            </ins>
          </p>
          <p>
            <u>This line of text will render as underlined.</u>
          </p>
          <p>
            <small>
              This line of text is meant to be treated as fine print.
            </small>
          </p>
          <p>
            <strong>This line rendered as bold text.</strong>
          </p>
          <p>
            <em>This line rendered as italicized text.</em>
          </p>
          <blockquote>
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figure>
            <blockquote>
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption>
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
          <ul>
            <li>This is a list.</li>
            <li>It appears completely unstyled.</li>
            <li>
              However, this style only applies to immediate child elements.
            </li>
            <li>
              Nested lists:
              <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
              </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
          </ul>
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <p>
            Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text (Windows).
          </p>
          <pre>
            <code className="language-js">{`module.exports = { purge: [], theme: { extend: {}, }, variants: {}, plugins: [], }`}</code>
          </pre>
        </div>

        <hr style={{ marginTop: 20, width: "90%" }} />
        <div>
          <Link href="/" locale={changeTo}>
            <button>{t("change-locale", { changeTo })}</button>
          </Link>
          {/* alternative language change without using Link component
          <button onClick={() => onToggleLanguageClick(changeTo)}>
            {t('change-locale', { changeTo })}
          </button>
          */}
          {/* alternative language change without using Link component, but this will change language only on client side
          <button onClick={() => clientSideLanguageChange(changeTo)}>
            {t('change-locale', { changeTo })}
          </button> */}
          <Link href="/second-page">
            <button type="button">{t("to-second-page")}</button>
          </Link>
        </div>
        {session ? (
          <div>
            <div>{loginResponse?.ok ? "No Error" : "Login Error"}</div>
            <button type="button" onClick={() => signOut()}>
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <form>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
              <br />
              <button
                type="button"
                onClick={() =>
                  signIn("credentials", {
                    username: username,
                    password: password,
                    redirect: false,
                    locale: router.locale,
                  }).then(async (response: any) => {
                    setLoginResponse(response);
                  })
                }
              >
                Login
              </button>
            </form>
          </div>
        )}
      </main>
    </Layouts>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Homepage;

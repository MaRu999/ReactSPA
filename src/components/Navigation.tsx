import * as React from 'react';
import {HashRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Numbers} from "./Numbers";
import {Dates} from "./Dates";
import {Texts} from "./Texts";
import styled from "styled-components";
import {useState} from "react";
import {FormattedMessage, IntlProvider} from "react-intl";
import MsgDe from "../translations/de.json";
import MsgEn from "../translations/en.json";
import MsgFr from "../translations/fr.json";

const NavDiv = styled.div`
    height: 30px;
    background-color: lightblue;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: space between;
    padding: 5px;
`
const NavSpan = styled.span`
    margin: 10px;
    `
export const Navigation = (): JSX.Element => {

    const getLanguageFromStorage = (): string => {
        const lang = localStorage.getItem('myLang');
        if(lang !== null) {
            return lang;
        } else {
            return "de";
        }
    }

    const [chosenLang, setChosenLang] = useState(getLanguageFromStorage());

    const changeLanguage = (lang: string): void => {
        setChosenLang(lang);
        localStorage.setItem('myLang', lang);
    }

    type msgs = {
        [key: string]: Record<string, string>
    }

    const intlMessages: msgs = {
        'de': MsgDe,
        'en': MsgEn,
        'fr': MsgFr
    };

    return (
        <HashRouter>
            <IntlProvider locale={chosenLang} messages={intlMessages[chosenLang]}>
                <NavDiv>
                    <NavSpan><Link to="/numbers"><FormattedMessage id="numbers"/></Link></NavSpan>
                    <NavSpan><Link to="/dates"><FormattedMessage id="dates"/></Link></NavSpan>
                    <NavSpan><Link to="/texts"><FormattedMessage id="texts"/></Link></NavSpan>
                    <NavSpan>
                        <select id="lang" value={chosenLang}
                                onChange={(selectOption): void => changeLanguage(selectOption.target.value)}>
                            <option value="en">en</option>
                            <option value="de">de</option>
                            <option value="fr">fr</option>
                        </select>
                    </NavSpan>
                </NavDiv>
                <Switch>
                    <Route path="/numbers">
                        <Numbers/>
                    </Route>
                    <Route path="/dates">
                        <Dates/>
                    </Route>
                    <Route path="/texts">
                        <Texts/>
                    </Route>
                </Switch>
            </IntlProvider>
        </HashRouter>

    );
};
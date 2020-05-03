import * as React from 'react';
import {FormattedMessage} from "react-intl";
import {useState} from "react";

export const Texts = (): JSX.Element => {

    const [num, setNum] = useState<number>(0);
    const [gender, setGender] = useState<string>("Male")

    const changeNum = (chosenNum: string): void => {
        setNum(parseInt(chosenNum));
    }

    const changeGender = (gender: string): void => {
        setGender(gender);
        console.log(gender);
    }

    return (
        <>
            <input type="number" value={num} onChange={(chosenNumber): void => changeNum(chosenNumber.target.value)}/>
            <select id="gender" value={gender}
                    onChange={(selectOption): void => changeGender(selectOption.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Neutral">Neutral</option>
            </select>
            <br/>
            <FormattedMessage id="plural" defaultMessage="Cannot load messages" values={{num: num}}/>
            <br/>
            <FormattedMessage id="select" defaultMessage="Cannot load messages" values={{gender: gender}}/>
            <br/>
            <FormattedMessage id="both" defaultMessage="Cannot load messages" values={{gender: gender, num: num}}/>
        </>
    );
};
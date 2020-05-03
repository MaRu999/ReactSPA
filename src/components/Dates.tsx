import * as React from 'react';
import {useState} from "react";
import {FormattedDate} from "react-intl";

export const Dates = (): JSX.Element => {

    const [usedDate, setUsedDate] = useState<string>("");

    const changeDate = (chosenDate: string): void => {
        setUsedDate(chosenDate);
    }

    return (
        <>
            <input type="date" value={usedDate} onChange={(chosenDate): void => changeDate(chosenDate.target.value)}/>
            <div>
                <FormattedDate value={usedDate}/>
                <br/>
                <FormattedDate year="numeric" month="long" day="2-digit" value={usedDate}/>
                <br/>
                <FormattedDate year="2-digit" month="short" day="numeric" era="long" value={usedDate}/>
            </div>
        </>
    );
};
import * as React from 'react';
import {useState} from "react";
import {FormattedNumber} from "react-intl";

export const Numbers = (): JSX.Element => {

    const [usedNum, setUsedNum] = useState<number>(0);

    const changeNum = (chosenNum: string): void => {
        setUsedNum(parseInt(chosenNum));
    }

    return (
        <>
            <input type="number" value={usedNum}
                   onChange={(chosenNumber): void => changeNum(chosenNumber.target.value)}/>
            <br/>
            <div>
                <FormattedNumber value={usedNum}/>
                <br/>
                <FormattedNumber style="unit" unit="kilobyte" value={usedNum}/>
                <br/>
                <FormattedNumber currency="EUR" style="currency" value={usedNum}/>
                <br/>
                <FormattedNumber currency="EUR" minimumFractionDigits={6} style="currency" value={usedNum}/>
            </div>
        </>
    );
};
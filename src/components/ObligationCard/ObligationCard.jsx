import { useState } from 'react'
import Select from 'react-select';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import cn from 'classnames'

import s from './ObligationCard.module.css'

import {
    indicatorOptions,
    periodOptions
} from './constants'

export const ObligationCard = ({ data }) => {
    const [periodValue, setPeriod] = useState(periodOptions[0].value);
    const [indicator, setIndicator] = useState(indicatorOptions[0]);

    const dataToRender = periodValue > 0 ? data.slice(0, periodValue) : data

    return (
        <div className={s.obligationCardContainer}>
            <div>
                <ul className={s.periods}>
                    { periodOptions.map(period => {
                        const isChecked = period.value === periodValue

                        return (
                            <li key={period.value} className={cn({[s.checkde]: isChecked})}>
                                <label>
                                    <input
                                        type='radio'
                                        onChange={() => setPeriod(period.value)}
                                        checked={isChecked}
                                    />
                                    {period.label}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <LineChart width={500} height={300} data={dataToRender} accessibilityLayer>
                <XAxis dataKey='date'/>
                <YAxis dataKey={indicator.value} />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey={indicator.value} stroke='grey' />
                <Tooltip/>
            </LineChart>
            <div className={s.indicatorSelectContainer}>
                <Select
                    className={s.indicatorSelect}
                    defaultValue={indicator}
                    onChange={setIndicator}
                    options={indicatorOptions}
                />
            </div>
        </div>
    )
}
import { useEffect, useRef, useState } from 'react'
import Select from 'react-select';
import s from './CardContainer.module.css'

import { ObligationCard } from '../ObligationCard'

export const CardContainer = ({ cards }) => {
    const init = useRef(false)
    const [card, setCard] = useState(null)

    useEffect(() => {
        if (!init.current && cards.length > 0) {
            init.current = true
            setCard(cards[0])
        }
    }, [cards]);

    if (!card) return <div>Loading data..</div>

    return (
        <div className={s.cardContainer}>
            {card
                ? <>
                    Выбор инструмента:
                    <Select
                        defaultValue={card}
                        onChange={setCard}
                        options={cards}
                    />
                    <div>
                        <ObligationCard data={card.data}/>
                    </div>
                  </>
                : <div>Loading data..</div>
            }
        </div>
    )
}
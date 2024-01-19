import dayjs from 'dayjs'

const randomValue = () => {
    // значение примитивно регулирует с какой вероятностью показатели будут расти
    const possibilityOfGrowth = 0.8
    const sign = Math.random() < possibilityOfGrowth ? 1 : -1
    return Math.random() * 100 * sign
}

const MIN_VALUE = 10

const generateData = (length) => {
    let value = Math.abs(randomValue())
    return [...Array(length).keys()].map(i => {
        value = value + randomValue()
        return {
            id: i,
            date: dayjs().add(i, 'days').format('DD.MM'),
            price: +Math.max(value , MIN_VALUE).toFixed(2),
            yield: +Math.max(value / randomValue() * 10, MIN_VALUE).toFixed(2),
            spread: +Math.max(value / randomValue() * 10, MIN_VALUE).toFixed(2),
        }
    })
}

const generateCards = (numberOfCards) => {
    return [...Array(numberOfCards).keys()].map(i => {
        return {
            id: i,
            value: i,
            label: `ISIN ${i}`,
            data: generateData(1000),
        }
    })
}

export const getDataAcync = async (length) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const cards = generateCards(length)
            resolve(cards)
        }, 2000)
    })
}
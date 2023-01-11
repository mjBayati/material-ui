
export default class GlobalVariableRepository {
    static NUMBER_OF_LOCATIONS = 15
    static STARTING_PRICE = '$7.95'
    static HIGHEST_PRICE = '$54.95'
    static NUMBER_OF_CUSTOMERS = '12000+'
    static YEARS_OF_EXPERIENCE = '13'
    static MONEY_BACK_GUARANTEE = '7 Days'
    static MONEY_BACK_GUARANTEE_WITHOUT_UNIT = '7'
    static UPTIME = '99.95%'
    static PRICE_OFFER_COUNT = 4
    static GATSBY_SITE_URL = 'https://dev2.cloudzy.com'

    static get HIGHEST_PRICE_WITHOUT_UNIT() {
        return GlobalVariableRepository.HIGHEST_PRICE.substring(1)
    }

    static get STARTING_PRICE_WITHOUT_UNIT() {
        return GlobalVariableRepository.STARTING_PRICE.substring(1)
    }
}
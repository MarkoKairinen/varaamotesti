export default {
  API_URL: SETTINGS.API_URL,
  CUSTOMIZATIONS: {
    'varaamo.espoo.fi': 'ESPOO',
    'varaamotest-espoo.hel.ninja': 'ESPOO',
    'varaamo.vantaa.fi': 'VANTAA',
    'varaamotest-vantaa.hel.ninja': 'VANTAA',
  },
  DATE_FORMAT: 'YYYY-MM-DD',
  DEFAULT_LOCALE: 'fi',
  FEEDBACK_URL: 'https://app.helmet-kirjasto.fi/forms/?site=varaamopalaute',
  FILTER: {
    timeFormat: 'HH:mm',
    timePeriod: 30,
    timePeriodType: 'minutes',
  },
  NOTIFICATION_DEFAULTS: {
    message: '',
    type: 'info',
    timeOut: 5000,
    hidden: false,
  },
  REQUIRED_API_HEADERS: {
    Accept: 'application/json',
    'Accept-Language': 'fi',
    'Content-Type': 'application/json',
  },
  REQUIRED_STAFF_EVENT_FIELDS: ['eventDescription', 'reserverName'],
  RESERVATION_STATE_LABELS: {
    cancelled: {
      labelBsStyle: 'default',
      labelTextId: 'common.cancelled',
    },
    confirmed: {
      labelBsStyle: 'success',
      labelTextId: 'common.confirmed',
    },
    denied: {
      labelBsStyle: 'danger',
      labelTextId: 'common.denied',
    },
    requested: {
      labelBsStyle: 'primary',
      labelTextId: 'common.requested',
    },
  },
  SEARCH_PAGE_SIZE: 30,
  SEARCH_MUNICIPALITY_OPTIONS: ['Helsinki', 'Espoo', 'Vantaa'],
  SHOW_TEST_SITE_MESSAGE: SETTINGS.SHOW_TEST_SITE_MESSAGE,
  SUPPORTED_LANGUAGES: ['en', 'fi', 'sv'],
  SUPPORTED_SEARCH_FILTERS: {
    freeOfCharge: '',
    date: '',
    distance: '',
    duration: 0,
    municipality: '',
    end: '',
    lat: '',
    lon: '',
    orderBy: '',
    page: 1,
    people: '',
    purpose: '',
    search: '',
    start: '',
    unit: '',
    useTimeRange: false,
  },
  TIME_FORMAT: 'H:mm',
  TIME_SLOT_DEFAULT_LENGTH: 30,
  TRACKING: SETTINGS.TRACKING,
  SORT_BY_OPTIONS: {
    NAME: 'resource_name_lang',
    TYPE: 'type_name_lang',
    PREMISES: 'unit_name_lang',
    PEOPLE: 'people_capacity',
    // TODO: sortby 'open now' should be implemented later after API support it
  }
};

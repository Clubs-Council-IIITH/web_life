import { format } from 'date-fns';
import type { PageServerLoad } from './$types';
import { getClient } from '$lib/gql/client';
import { GET_ALL_EVENTS } from '$lib/gql/queries/events';
import { GET_CLUB } from '$lib/gql/queries/clubs';

const FILESERVER_URL = 'https://clubs.iiit.ac.in';
type LocationKey = keyof typeof locationMap;
// Event venue mappings
const locationMap = {
  h101: "Himalaya 101",
  h102: "Himalaya 102",
  h103: "Himalaya 103",
  h104: "Himalaya 104",
  h201: "Himalaya 201",
  h202: "Himalaya 202",
  h203: "Himalaya 203",
  h204: "Himalaya 204",
  h301: "Himalaya 301",
  h302: "Himalaya 302",
  h303: "Himalaya 303",
  h304: "Himalaya 304",
  va3_117: "Vindhya A3 117",
  vsh1: "Vindhya SH1",
  vsh2: "Vindhya SH2",
  amphi: "Amphitheatre",
  warehouse: "Bakul Warehouse",
  cieg: "CIE Gaming",
  sarg: "Saranga Hall",
  felig: "Felicity Ground",
  footg: "Football Ground",
  guest: "Guest House",
  h105: "Himalaya 105",
  h205: "Himalaya 205",
  krba: "KRB Auditorium",
  lm22: "LM-22, KRB",
  sm24: "SM-24, KRB",
  sm32: "SM-32, KRB",
  lm34: "LM-34, KRB",
  d101: "D101, T-Hub",
  other: "Other",
};

function getFile(filepath: string): string {
  if (filepath?.toLowerCase()?.startsWith("http")) {
    return filepath;
  } else if (filepath) {
    return `${FILESERVER_URL}/files/download?filename=${filepath}`;
  }
  return '';
}

function locationLabel(location: string): string {
  if (!location) return '';
  const locations = String(location).split(',');
  return locations.map(loc => locationMap[loc.trim() as LocationKey] || loc.trim()).join(', ');
}

export const load: PageServerLoad = async () => {
  const { data: { events } = {} } = await getClient().query(GET_ALL_EVENTS, {
    clubid: "vamsi.krishna",
    public: true,
  });

  const { data: { club } = {} } = await getClient().query(GET_CLUB, {
    clubInput: { cid: "vamsi.krishna" },
  });

  const slc_events = events.map(event => {
    const isoDateString = event.datetimeperiod[0];
    const date = new Date(isoDateString);
    return {
      ...event,
      date: format(date, 'EEEE, MMMM do, yyyy'),
      club_logo: getFile(club.logo),
      club_name: club.name,
      location: locationLabel(event.location),
      image: event.poster ? getFile(event.poster) : getFile(club.logo),
    };
  });

  return {
    page_server_data: {
      events: slc_events,
    },
  };
};

import { reactive, readonly } from 'vue';
import Papa from 'papaparse';

// !!! IMPORTANT: Replace this with your own Google Sheet ID !!!
const SHEET_ID = '17PBZ4Mjqa4JPKn9glnubY_mDjts_aIi8d9leIU76a0o';

console.log(SHEET_ID);


// The names of the tabs in your Google Sheet
const SHEET_NAMES = ['Info', 'About', 'Education', 'Experience', 'Skills', 'Certifications', 'Projects'];

const state = reactive({
    loading: true,
    error: null,
    data: {},
});

const fetchData = async () => {
    state.loading = true;
    state.error = null;

    try {
        const fetchPromises = SHEET_NAMES.map(sheetName => {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
            return fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Failed to fetch sheet: ${sheetName}`);
                    }
                    return res.text();
                })
                .then(csv => {
                    return new Promise((resolve) => {
                        Papa.parse(csv, {
                            header: true,
                            complete: (results) => {
                                resolve({ sheetName, data: results.data });
                            }
                        });
                    });
                });
        });

        const results = await Promise.all(fetchPromises);

        const formattedData = {};
        results.forEach(({ sheetName, data }) => {
            if (sheetName === 'Info') {
                // Convert Info sheet from array of {key, value} to a single object
                formattedData.info = data.reduce((obj, item) => {
                    if (item.key) obj[item.key] = item.value;
                    return obj;
                }, {});
            } else {
                 formattedData[sheetName.toLowerCase()] = data;
            }
        });

        // Split about data into paragraphs and services
        if (formattedData.about) {
            formattedData.about_paragraphs = formattedData.about.filter(item => item.type === 'paragraph');
            formattedData.about_services = formattedData.about.filter(item => item.type === 'service');
        }


        state.data = formattedData;

    } catch (err) {
        console.error("Error fetching portfolio data:", err);
        state.error = 'Failed to load portfolio data. Please check the Sheet ID and ensure all sheets are published correctly.';
    } finally {
        state.loading = false;
    }
};

export function usePortfolioData() {
    if (Object.keys(state.data).length === 0) {
        fetchData();
    }
    return {
        state: readonly(state)
    };
}
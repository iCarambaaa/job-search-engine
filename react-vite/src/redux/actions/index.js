export const SAVE_TO_JOBLIST ='SAVE_TO_JOBLIST'

export const saveFetchedJobsAction = (fetchedData) => ({
    type: SAVE_TO_JOBLIST,
    payload: fetchedData
})
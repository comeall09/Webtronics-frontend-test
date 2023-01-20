import { createApi, retry, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiConfig = {
  baseUrl: "http://localhost:3004",
}

const FEEDBACKS_PATH = "feedback"

export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  tagTypes: ["Feedback"],
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: apiConfig.baseUrl,
    }),
    { maxRetries: 3 }
  ),
  endpoints: (builder) => ({
    getFeedbacks: builder.query({
      query: () => `/${FEEDBACKS_PATH}`,
      providesTags: (data) => {
        if (data) {
          return [
            ...data.map(({ id }: any) => ({ type: "Feedback", id })),
            { type: "Feedback", id: "LIST" },
          ]
        }
        return [{ type: "Feedback", id: "LIST" }]
      },
    }),
    postFeedback: builder.mutation({
      query: (feedback) => ({
        url: `/${FEEDBACKS_PATH}`,
        method: "POST",
        body: feedback,
      }),
      invalidatesTags: [{ type: "Feedback", id: "LIST" }],
    }),
  }),
})

export const { useGetFeedbacksQuery, usePostFeedbackMutation } = feedbackApi
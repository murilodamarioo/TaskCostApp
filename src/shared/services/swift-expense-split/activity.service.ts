import { api } from '@/shared/api/swift-expense-split'
import { ActivityDetailResponse } from '@/shared/interfaces/https/activity/activity-detail-response'
import { ActivityListResponse } from '@/shared/interfaces/https/activity/activity-list-response'
import { ActivityRequest } from '@/shared/interfaces/https/activity/activity-request'

export const create = async (activityData: ActivityRequest): Promise<void> => {
  await api.post('/activities', activityData)
}

export const update = async (
  activityId: string, activityData: ActivityRequest
): Promise<void> => {
  await api.put(`/activities/${activityId}`, activityData)
}

export const fetchActivities = async (userId: string): Promise<ActivityListResponse> => {
  const { data } = await api.get<ActivityListResponse>(`/users/${userId}/activities`)

  return data
}

export const getActivityById = async (activityId: string): Promise<ActivityDetailResponse> => {
  const { data } = await api.get<ActivityDetailResponse>(`/activities/${activityId}`)

  return data
}

export const remove = async (activityId: string): Promise<void> => {
  await api.delete(`/activities/${activityId}`)
}
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useCallback,
  useState
} from 'react'

import { useAuthContext } from './auth.context'

import { ActivityListItem } from '@/shared/interfaces/https/activity/activity-list-response'
import { ActivityRequest } from '@/shared/interfaces/https/activity/activity-request'

import * as activityService from '@/shared/services/swift-expense-split/activity.service'

interface Loadings {
  initial: boolean
  refresh: boolean
}

interface HandleloadingsParams {
  key: keyof Loadings
  value: boolean
}

type ActivityContextType = {
  activities: ActivityListItem[]
  loadings: Loadings
  refreshActivities: () => Promise<void>
  fetchActivities: () => Promise<void>
  createActivity: (activity: ActivityRequest) => Promise<void>
  handleLoadings: (params: HandleloadingsParams) => void
}

export const ActivityContext = createContext(
  {} as ActivityContextType
)

export const ActivityContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activities, setActivities] = useState<ActivityListItem[]>([])
  const [loadings, setLoadings] = useState<Loadings>({
    initial: false,
    refresh: false
  })

  const { userId } = useAuthContext()

  const refreshActivities = useCallback(async () => {
    if (!userId) {
      setActivities([])
      return
    }

    const response = await activityService.getActivities(userId)

    setActivities(response.activities)
  }, [userId])

  const fetchActivities = async () => {
    const activitiesResponse = await activityService.getActivities(userId!)

    setActivities(activitiesResponse.activities)
  }

  const createActivity = async (activity: ActivityRequest) => {
    await activityService.create(activity)
    await refreshActivities()
  }

  const handleLoadings = ({ key, value }: HandleloadingsParams) => {
    setLoadings((prevState) => ({ ...prevState, [key]: value }))
  }

  return (
    <ActivityContext.Provider
      value={{
        activities,
        loadings,
        refreshActivities,
        fetchActivities,
        createActivity,
        handleLoadings
      }}
    >
      {children}
    </ActivityContext.Provider>
  )
}

export const useActivityContext = () => {
  const context = useContext(ActivityContext)

  return context
}
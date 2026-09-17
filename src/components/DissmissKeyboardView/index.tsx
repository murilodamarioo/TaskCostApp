import { FC, PropsWithChildren } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface DismissKeyboardViewProps extends PropsWithChildren {
  scrollEnabled?: boolean
}

export const DismissKeyboardView: FC<DismissKeyboardViewProps> = ({
  children,
  scrollEnabled = true
}) => {
  return (
    <SafeAreaView className='flex-1 bg-gray-800'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior='padding' className='flex-1'>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            scrollEnabled={scrollEnabled}
          >
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
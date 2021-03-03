import { FC } from 'react'
import DashboardTitle from '@components/ui/dashboard/DashboardTitle'

interface DashboardHeadingProps {
  title: string
}

const DashboardHeading: FC<DashboardHeadingProps> = (props) => (
  <div className="flex flex-row">
    <DashboardTitle>{props.title}</DashboardTitle>
  </div>
)

export default DashboardHeading

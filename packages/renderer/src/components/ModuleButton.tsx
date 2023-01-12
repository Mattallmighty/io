import { InputData, OutputData } from '@/store/mainStore'
import { camelToSnake } from '@/utils'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon/Icon'

const ModuleButton = ({ data }: { data: InputData | OutputData }) => {
  return (
    <>
      <Button
        size='small'
        disabled
        variant='outlined'
        sx={{
          fontSize: 10,
          width: '130px',
          justifyContent: 'flex-start',
          mr: 2,
        }}
      >
        <Icon style={{ marginRight: '10px' }}>{camelToSnake(data.icon)}</Icon>
        {data.name}
      </Button>
      {data.data.text && (
        <Button
          size='small'
          color='inherit'
          variant='outlined'
          sx={{
            fontSize: 12,
            textTransform: 'unset',
            flexGrow: 1,
            justifyContent: 'flex-start',
            mr: 2,
          }}
        >
          {data.data.text}
        </Button>
      )}
    </>
  )
}

export default ModuleButton

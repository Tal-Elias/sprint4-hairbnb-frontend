import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export function IndexLoader() {
  const demoStays = Array.from({ length: 15 }, (_, i) => ({ _id: i + 101 }))

  return (
    <>
      <ul className='stay-list clean-list'>
        {demoStays.map((demoStay) => {
          return (
            <li key={demoStay._id} className='loader-list-item stay-list-item'>
              <article className='preview'>
                <Stack sx={{ height: '100%' }}>
                  <Skeleton
                    variant='rounded'
                    sx={{
                      backgroundColor: '#ebebeb',
                      borderRadius: '15px',
                      height: '100%',
                      aspectRatio: '20/19',
                    }}
                  />
                  <div className='preview-header flex space-between'>
                    <Skeleton
                      variant='text'
                      sx={{
                        backgroundColor: '#ebebeb',
                        fontSize: '1.5rem',
                        width: '45%',
                      }}
                    />
                    <Skeleton
                      variant='text'
                      sx={{ fontSize: '1.5rem', width: '15%' }}
                    />
                  </div>
                  <Stack spacing={0}>
                    <Skeleton
                      variant='text'
                      sx={{ fontSize: '0.8rem', width: '33%' }}
                    />
                    <Skeleton
                      variant='text'
                      sx={{ fontSize: '0.8rem', width: '20%' }}
                    />
                  </Stack>
                  <Skeleton
                    variant='text'
                    sx={{ fontSize: '1rem', width: '33%' }}
                  />
                </Stack>
              </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}

import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BACK,
  ORDER,
  ORDER_CONFIRMATION,
  PRICE_FOR_SEATS,
  SELECTED_SEATS,
  TOTAL_PRICE,
} from '../../stringVariables';
import { Link } from 'react-router-dom';
import { ModalSeats } from './ModalSeats';
import { addSeatsPrice } from '../../Redux/slices/orderSlice';

export const SummaryOfSeats = () => {
  const [isSeatSelected, setIsSelected] = useState<boolean>(false);

  const dispatch = useDispatch()


  const ticketPrice = useSelector(
    (state) => state.orderTicketData.orderTicket.price
  );


  const seatsCount = useSelector(
    (state) => state.orderTicketData.seatsCount
  );


  const resultPrice = ticketPrice * seatsCount;

  return (
    <React.Fragment>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Typography variant='h2' sx={{ textTransform: 'capitalize' }}>
          {ORDER}
        </Typography>
        <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>
          {PRICE_FOR_SEATS} ${ticketPrice}
        </Typography>

        <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>
          {SELECTED_SEATS} {seatsCount}
        </Typography>

        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', fontWeight: 900 }}
        >
          {TOTAL_PRICE} ${resultPrice}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            pt: 2,
          }}
        >
          <Button
            onClick={() => {
              seatsCount === 0 ? setIsSelected(true) : setIsSelected(false),
                dispatch(addSeatsPrice(resultPrice));
                
            }}
            type='button'
            variant='contained'
            color='success'
            sx={{ '& > a': { color: '#fff ', textDecoration: 'none' } }}
          >
            {seatsCount === 0 ? (
              `${ORDER_CONFIRMATION}`
            ) : (
              <Link to='/person-info-ticket'>{`${ORDER_CONFIRMATION}`}</Link>
            )}
          </Button>
          <Link to='/'>
            <Button type='button' variant='contained'>
              {BACK}
            </Button>
          </Link>
        </Box>
      </Stack>
      {isSeatSelected && (
        <ModalSeats
          isSeatSelected={isSeatSelected}
          setIsSelected={setIsSelected}
        />
      )}
    </React.Fragment>
  );
};

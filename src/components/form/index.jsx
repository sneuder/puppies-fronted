import { Card, Grid, Typography } from '@mui/material';

import { ButtonForm, InputForm, SelectForm } from '../../shared/inputs';
import { styleCard } from './style';

import {
  GeneralContainer,
  SubContainerFull,
  SubContainerMulti,
} from '../../shared/containers';

const Form = () => {
  return (
    <Card sx={styleCard}>
      <GeneralContainer>
        <SubContainerFull>
          <Typography>Create your Puppy</Typography>
        </SubContainerFull>

        <SubContainerFull>
          <InputForm labelProp={'Dog name'} />
        </SubContainerFull>
        <SubContainerFull>
          <InputForm labelProp={'Bred for'} />
        </SubContainerFull>

        <GeneralContainer gapProp={1}>
          <SubContainerFull>
            <Typography>Life Span</Typography>
          </SubContainerFull>
          <GeneralContainer>
            <SubContainerMulti space={6}>
              <InputForm labelProp={'From'} />
            </SubContainerMulti>
            <SubContainerMulti space={6}>
              <InputForm labelProp={'To'} />
            </SubContainerMulti>
          </GeneralContainer>
        </GeneralContainer>

        <GeneralContainer>
          <SubContainerMulti space={10}>
            <SelectForm defaultItem={'Select Breed Group'} />
          </SubContainerMulti>
          <SubContainerMulti space={2}>
            <ButtonForm buttonContent={'+'} />
          </SubContainerMulti>
        </GeneralContainer>

        <GeneralContainer gapProp={1}>
          <SubContainerFull>
            <Typography>Weight (KG)</Typography>
          </SubContainerFull>
          <GeneralContainer>
            <SubContainerMulti space={6}>
              <InputForm labelProp={'From'} />
            </SubContainerMulti>
            <SubContainerMulti space={6}>
              <InputForm labelProp={'To'} />
            </SubContainerMulti>
          </GeneralContainer>
        </GeneralContainer>

        <SubContainerMulti space={10}>
          <SelectForm defaultItem={'Select the temperaments'} />
        </SubContainerMulti>
        <SubContainerMulti space={2}>
          <ButtonForm buttonContent={'+'} />
        </SubContainerMulti>

        <SubContainerMulti space={10}>
          <SelectForm defaultItem={'Select the origin'} />
        </SubContainerMulti>
        <SubContainerMulti space={2}>
          <ButtonForm buttonContent={'+'} />
        </SubContainerMulti>

        <SubContainerFull>
          <ButtonForm buttonContent={'New Puppy'} />
        </SubContainerFull>
      </GeneralContainer>
    </Card>
  );
};

export default Form;

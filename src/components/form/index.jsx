import { Card, Grid, Typography } from '@mui/material';

import {
  ButtonForm,
  InputForm,
  SelectForm,
  SelectedElements,
} from '../../shared/inputs';
import { styleCard } from './style';

import {
  GeneralContainer,
  SubContainerFull,
  SubContainerMulti,
} from '../../shared/containers';

import useFormDog from '../../hooks/useFormDog';

const Form = () => {
  const { dogForm, attributes, selectedAttrs, setAttr, deleteAttr } =
    useFormDog();
  const { handleSubmit, handleDog, register } = dogForm;

  return (
    <Card sx={styleCard}>
      <GeneralContainer>
        <SubContainerFull>
          <Typography>Create your Puppy</Typography>
        </SubContainerFull>

        <SubContainerFull>
          <InputForm
            labelProp={'Dog name'}
            {...register('name')}
          />
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

        <GeneralContainer gapProp={1}>
          <SubContainerMulti space={10}>
            <SelectForm
              defaultItem={'Select Breed Group'}
              items={attributes.breeds}
              event={setAttr}
              attr={'breed_group'}
            />
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

        <GeneralContainer gapProp={1}>
          <SubContainerMulti space={10}>
            <SelectForm
              defaultItem={'Select the temperaments'}
              items={attributes.temperaments}
              event={setAttr}
              attr={'temperament'}
            />
          </SubContainerMulti>
          <SubContainerMulti space={2}>
            <ButtonForm buttonContent={'+'} />
          </SubContainerMulti>
          <SubContainerFull>
            <SelectedElements
              elements={selectedAttrs.temperament}
              deletelement={deleteAttr}
              attr={'temperament'}
            />
          </SubContainerFull>
        </GeneralContainer>

        <GeneralContainer gapProp={1}>
          <SubContainerMulti space={10}>
            <SelectForm
              defaultItem={'Select the origin'}
              items={attributes.countries}
              event={setAttr}
              attr={'countries'}
            />
          </SubContainerMulti>
          <SubContainerMulti space={2}>
            <ButtonForm buttonContent={'+'} />
          </SubContainerMulti>
          <SubContainerFull>
            <SelectedElements
              elements={selectedAttrs.countries}
              deletelement={deleteAttr}
              attr={'countries'}
            />
          </SubContainerFull>
        </GeneralContainer>

        <SubContainerFull>
          <ButtonForm
            buttonContent={'New Puppy'}
            type="submit"
          />
        </SubContainerFull>
      </GeneralContainer>
    </Card>
  );
};

export default Form;

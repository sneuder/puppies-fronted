import { Card, Typography, Grid } from '@mui/material';

import { styleCard, styleValidations } from './style';

import {
  ButtonForm,
  ButtonSubmit,
  InputForm,
  InputFormNumber,
  SelectForm,
  SelectedElements,
} from '../../shared/inputs';

import {
  ContainerFull,
  ContainerDoubleInput,
  ContainerSelectForm,
  ContainerSelectMulti,
} from '../../shared/containers';

import DialogsAttrs from '../../shared/components/dialogsAttrs';

import useFormDog from '../../hooks/useFormDog';
import useDialog from '../../hooks/useDialog';

const Form = () => {
  const {
    validations,
    attributes,
    selectedAttrs,
    setAttr,
    deleteAttr,
    setProperties,
    postAttrs,
    handleDog,
  } = useFormDog();

  const dialogTools = useDialog();

  return (
    <Card sx={styleCard}>
      <Grid
        container
        spacing={2}
      >
        <DialogsAttrs
          dialogtools={dialogTools}
          postattrs={postAttrs}
        />

        <Grid
          item
          container
        >
          <Typography variant="h5">Create your Puppy</Typography>
        </Grid>

        <ContainerFull
          input={
            <InputForm
              labelProp={'Dog name'}
              event={setProperties}
              attr={'name'}
            />
          }
          error={
            <Typography
              variant="body2"
              sx={styleValidations}
            >
              {validations.name}
            </Typography>
          }
        />

        <ContainerFull
          input={
            <InputForm
              labelProp={'Bred for'}
              event={setProperties}
              attr={'bred_for'}
            />
          }
          error={
            <Typography
              variant="body2"
              sx={styleValidations}
            >
              {validations.bredFor}
            </Typography>
          }
        />

        <ContainerDoubleInput
          title={<Typography>Life Span (Years)</Typography>}
          input1={
            <InputFormNumber
              labelProp={'From'}
              event={setProperties}
              attr={'lifeSpan'}
              subAttr={'from'}
            />
          }
          input2={
            <InputFormNumber
              labelProp={'To'}
              event={setProperties}
              attr={'lifeSpan'}
              subAttr={'to'}
            />
          }
          error={
            <Typography
              variant="body2"
              sx={styleValidations}
            >
              {validations.lifeSpan}
            </Typography>
          }
        />

        <ContainerSelectForm
          select={
            <SelectForm
              defaultItem={'Select Breed Group'}
              items={attributes.breeds}
              event={setAttr}
              attr={'breeds'}
            />
          }
          button={<ButtonForm buttonContent={'+'} />}
        />

        <ContainerDoubleInput
          title={<Typography>Weight (KG)</Typography>}
          input1={
            <InputFormNumber
              labelProp={'From'}
              event={setProperties}
              attr={'weight'}
              subAttr={'from'}
            />
          }
          input2={
            <InputFormNumber
              labelProp={'To'}
              event={setProperties}
              attr={'weight'}
              subAttr={'to'}
            />
          }
          error={
            <Typography
              variant="body2"
              sx={styleValidations}
            >
              {validations.weight}
            </Typography>
          }
        />

        <ContainerSelectMulti
          select={
            <SelectForm
              defaultItem={'Select the temperaments'}
              items={attributes.temps}
              event={setAttr}
              attr={'temps'}
            />
          }
          button={
            <ButtonForm
              buttonContent={'+'}
              event={() => dialogTools.handleAttrsState('temp')}
            />
          }
          elements={
            <SelectedElements
              elements={selectedAttrs.temps}
              deletelement={deleteAttr}
              attr={'temps'}
            />
          }
        />

        <ContainerSelectMulti
          select={
            <SelectForm
              defaultItem={'Select the origin'}
              items={attributes.countries}
              event={setAttr}
              attr={'countries'}
            />
          }
          button={<ButtonForm buttonContent={'+'} />}
          elements={
            <SelectedElements
              elements={selectedAttrs.countries}
              deletelement={deleteAttr}
              attr={'countries'}
            />
          }
        />

        <Grid
          container
          item
        >
          <ButtonSubmit event={handleDog} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Form;

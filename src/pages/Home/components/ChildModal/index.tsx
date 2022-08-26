import Button from 'components/Button';
import TextInput from 'components/TextInput';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {connect, ConnectedProps} from 'react-redux';
import {ModalCreators} from 'store/reducers/global';
import {FieldValuesComsumption} from 'types';
import {yupResolver} from '@hookform/resolvers/yup';
import schemaComsumption from 'schemas/comsumptionSchema';
import {moneyOptions} from 'utils/constants';
import {ComsumptionCreators} from 'store/reducers/location';
import {RootState} from 'store/reducers';
import Text from '../../../../components/Text';
import {ViewInfo, ViewValue} from './styles';

const mapStateToProps = ({location}: RootState) => ({
  valueComsumption: location.getIn(['route', 'comsumption']),
});

const mapDispatchToProps = {
  setModal: ModalCreators.setModal,
  calculateComsumptionRequest: ComsumptionCreators.calculateComsumptionRequest,
  calculateComsumptionSuccess: ComsumptionCreators.calculateComsumptionSuccess,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsChild = PropsFromRedux & {
  time: {
    hours: number;
    minutes: number;
  };
  distance: number;
};

const ChildModal = ({
  time,
  distance,
  valueComsumption,
  setModal,
  calculateComsumptionSuccess,
  calculateComsumptionRequest,
}: PropsChild) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaComsumption),
  });

  const closeModal = () => {
    setModal({visible: false, child: null});
    calculateComsumptionSuccess('R$0,00');
  };

  const onSubmit = (data: FieldValuesComsumption) =>
    calculateComsumptionRequest(data);

  return (
    <>
      <ViewInfo>
        <Text bold fontSize={20}>
          Distância: <Text fontSize={20}>{distance} km</Text>
        </Text>
        <Text bold fontSize={20}>
          Tempo:{' '}
          <Text fontSize={20}>
            {`${time.hours < 10 ? `0${time.hours}` : time.hours}:${
              time.minutes < 10 ? `0${time.minutes}` : time.minutes
            }`}
            {time.hours > 0 ? ' horas' : ' minutos'}
          </Text>
        </Text>
      </ViewInfo>

      <Text bold fontSize={25}>
        Calcule o gasto de combustível:
      </Text>

      <Controller
        control={control}
        name="comsumption"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Consumo médio do veículo (km/l)"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            keyboardType="numeric"
            error={errors.comsumption?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="fuelValue"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            masked
            type="money"
            options={moneyOptions}
            placeholder="Valor do combustível"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            keyboardType="numeric"
            error={errors.fuelValue?.message}
          />
        )}
      />
      <ViewValue>
        <Text bold fontSize={20}>
          O valor gasto na viagem será de:
        </Text>
        <Text bold fontSize={20}>
          {valueComsumption}
        </Text>
      </ViewValue>

      <Button type="submit" onPress={handleSubmit(onSubmit)}>
        Calcular
      </Button>

      <Button type="cancel" onPress={closeModal}>
        Cancelar
      </Button>
    </>
  );
};

export default connector(ChildModal);

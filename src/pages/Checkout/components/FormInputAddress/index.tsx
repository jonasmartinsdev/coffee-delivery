import { InputContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import Input from '../../../../components/Input'
import { FormGroup } from '../../../../components/FormGroup'

export interface ErrosType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function FormInputAddress() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrosType

  return (
    <InputContainer>
      <FormGroup error={errors.cep?.message} className="cep">
        <Input
          type="number"
          placeholder="CEP"
          error={!!errors.cep?.message}
          {...register('cep')}
        />
      </FormGroup>
      <FormGroup error={errors.street?.message} className="street">
        <Input
          type="text "
          placeholder="Rua"
          error={!!errors.street?.message}
          {...register('street')}
        />
      </FormGroup>
      <FormGroup error={errors.number?.message}>
        <Input
          type="number"
          placeholder="Número"
          error={!!errors.number?.message}
          {...register('number')}
        />
      </FormGroup>
      <FormGroup className="complement">
        <Input
          type="text "
          placeholder="Complemento"
          {...register('complement')}
        />
      </FormGroup>
      <FormGroup error={errors.district?.message}>
        <Input
          type="text "
          placeholder="Bairro"
          error={!!errors.district?.message}
          {...register('district')}
        />
      </FormGroup>

      <FormGroup error={errors.city?.message}>
        <Input
          type="text "
          placeholder="Cidade"
          error={!!errors.city?.message}
          {...register('city')}
        />
      </FormGroup>
      <FormGroup error={errors.city?.message}>
        <Input
          type="text "
          placeholder="UF"
          error={!!errors.city?.message}
          {...register('uf')}
        />
      </FormGroup>
    </InputContainer>
  )
}

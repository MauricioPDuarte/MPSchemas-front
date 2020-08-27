import { extend }  from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules'

extend('required', {
    ...required,
    message: '{_field_} é obrigatório!'
});

extend('email', {
    ...email,
    message: '{_field_} inválido!'
});


extend('min', {
    ...min,
    message: '{_field_} deve ter no mínimo {length} caracteres!'
});


extend('password', {
    params: ['target'],
    validate(value, { target }) {
      return value === target;
    },
    message: 'As senhas não são iguais!'
});




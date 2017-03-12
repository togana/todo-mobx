import { observable } from 'mobx';
import { ALL_TODOS } from '../constants';

const todoBeingEdited = () => observable(null);
const todoFilter = () => observable(ALL_TODOS);

export default { todoBeingEdited, todoFilter };

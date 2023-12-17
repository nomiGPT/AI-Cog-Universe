import React, {FunctionComponent} from 'react';
import Checkbox from "@/components/BaseFormFields/Checkbox";
import LabelValuePair from "@/types/LabelValuePair";
import useOptionsSelection from '@/hooks/use-options-selection.hook';
import styles from './styles.module.scss'

type Props = {
  options: LabelValuePair[];
  checkedOptions: LabelValuePair[];
  onChange: (option: LabelValuePair[]) => void
}

const ControlledCheckboxGroup: Fun
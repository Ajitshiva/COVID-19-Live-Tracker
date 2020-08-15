import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './StatePicker.module.css';

const StatePicker = () =>
{
  
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue ="">
                <option value="">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker;
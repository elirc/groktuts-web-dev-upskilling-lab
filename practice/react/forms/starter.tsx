import React from "react";
export function ValidatedInput() { return <input />; }
export function TicketCreateForm({onCreate}: any) { return <form></form>; }
export function MultiField({onSubmit}:any) { return <form></form>; }

export function useForm(initial: any) { return { values: initial, setField:()=>{}, errors:{}, setErrors:()=>{}, reset:()=>{} }; }
export function ValidatedForm({schema, onSubmit}: any) { return <form></form>; }
export function DynamicFieldArray({fields, onChange}: any) { return <div></div>; }
export function FileUpload({onFiles}: any) { return <input type="file" />; }
export function DateRangePicker({start, end, onChange}: any) { return <div></div>; }
export function FormWizard({steps, onComplete}: any) { return <div></div>; }
export function AutoSaveForm({values, onSave, delay=1000}: any) { return <form></form>; }
export function MaskedInput({mask, value, onChange}: any) { return <input />; }

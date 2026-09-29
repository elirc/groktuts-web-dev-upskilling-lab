import React, { useState } from "react";

export function ValidatedInput() {
  const [v, setV] = useState("");
  const err = v.length > 0 && v.length < 3;
  return <input value={v} onChange={e=>setV(e.target.value)} aria-invalid={err} data-testid="val" />;
}

export function TicketCreateForm({ onCreate }: {onCreate: (d:any)=>void}) {
  const [title, set] = useState("");
  function submit(e: React.FormEvent) { e.preventDefault(); if (title.length >= 3) onCreate({title}); }
  return <form onSubmit={submit}><input value={title} onChange={e=>set(e.target.value)} data-testid="title" /><button type="submit">Create</button></form>;
}

export function MultiField({onSubmit}: {onSubmit:(d:any)=>void}) {
  const [data, setData] = useState({name:"", email:""});
  return <form onSubmit={e=>{e.preventDefault(); onSubmit(data);}}>
    <input data-testid="name" value={data.name} onChange={e=>setData({...data,name:e.target.value})}/>
    <button>Save</button>
  </form>;
}

// 30+ more form drills
export function useForm(initial: any) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const setField = (k:string, v:any) => setValues((prev:any)=>({...prev,[k]:v}));
  return { values, setField, errors, setErrors, reset: () => setValues(initial) };
}

export function ValidatedForm({schema, onSubmit}: any) {
  const [vals, setVals] = useState({});
  const [errs, setErrs] = useState({});
  return <form onSubmit={e=>{e.preventDefault(); onSubmit(vals);}}>{/* fields */}</form>;
}

export function DynamicFieldArray({fields, onChange}: any) {
  return <div>{fields.map((f:any,i:number) => <input key={i} value={f} onChange={e=> { const c=[...fields]; c[i]=e.target.value; onChange(c); }} /> )}</div>;
}

export function FileUpload({onFiles}: any) {
  return <input type="file" multiple onChange={e=>onFiles(Array.from(e.target.files||[]))} />;
}

export function DateRangePicker({start, end, onChange}: any) {
  return <div><input type="date" value={start} onChange={e=>onChange(e.target.value, end)} /> - <input type="date" value={end} onChange={e=>onChange(start, e.target.value)} /></div>;
}

export function FormWizard({steps, onComplete}: any) {
  const [step, setStep] = useState(0);
  return <div>Step {step+1}/{steps.length} <button onClick={()=>setStep(Math.min(step+1,steps.length-1))}>Next</button></div>;
}

export function AutoSaveForm({values, onSave, delay=1000}: any) {
  useEffect(() => { const t = setTimeout(()=>onSave(values), delay); return ()=>clearTimeout(t); }, [values]);
  return <form>{/* controlled fields */}</form>;
}

export function MaskedInput({mask, value, onChange}: any) {
  return <input value={value} onChange={e=>onChange(e.target.value)} placeholder={mask} />;
}

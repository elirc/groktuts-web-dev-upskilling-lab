import { useEffect } from "react";
useEffect(() => { console.log("mounted"); return () => console.log("cleanup"); }, []);

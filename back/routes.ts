import { Router } from "express";
import { getPatientInfo } from "./patientController.ts";

const router = Router();

router.post("/patient-info", getPatientInfo);

export default router;

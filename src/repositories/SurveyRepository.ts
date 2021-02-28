import { Survey } from "../models/Survey";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Survey)
class SurveyRepository extends Repository<Survey>{

}

export { SurveyRepository };
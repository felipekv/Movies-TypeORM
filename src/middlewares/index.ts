import { handleErrors } from "./handleErrors.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyIdExists } from "./verifyIdExists.middleware";
import { pagination } from "./pagination.middleware";
import { verifyNameExists } from "./verifyNameExists.middleware";

export default { handleErrors, validateBody, verifyIdExists, pagination, verifyNameExists };

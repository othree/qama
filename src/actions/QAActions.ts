import AppDispatcher from '../dispatcher/AppDispatcher';
import QAActionID from "./QAActionID";

class QAActionsStatic {
  /**
   * @param  {string} text
   */
  public answer(key:string): void {
    AppDispatcher.dispatch({
      "actionType": QAActionID.QA_ANSWER,
      "key": key
    });
  }

  public back(): void {
    AppDispatcher.dispatch({
      "actionType": QAActionID.QA_BACK
    });
  }
}

var QAActions: QAActionsStatic = new QAActionsStatic();
export default QAActions;

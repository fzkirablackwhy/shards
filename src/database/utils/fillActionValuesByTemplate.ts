// FIXME: Поправить пути до констант
import { actionTemplatesMap } from '../constants/actionTemplates';

export const fillActionValuesByTemplate = (
  templateKey: TActionTemplateKey,
  actionValues: Partial<ActionType>,
) => {
  const actionTemplate = actionTemplatesMap.get(templateKey);
  if (actionTemplate && actionValues) {
    return Object.assign(
      {},
      actionTemplate,
      ...Object.keys(actionValues)
        // FIXME: либо убрать эффект по флагу hasEffect, либо оставить и фильтровать в дальнейшем
        .map(k => k in actionValues && { [k]: actionValues[k as keyof ActionType] })
        // FIXME: подумать, стоит ли убирать значения, которые не заданы
        .filter(key => Object.keys(actionTemplate).includes(Object.keys(key)?.[0])),
    );
  }
  throw new Error('Ошибка заполнения значений навыка по выбранному шаблону');
};

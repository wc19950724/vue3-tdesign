import {
    debounce,
} from 'lodash';
import {
    MessagePlugin, MessageThemeList,
} from 'tdesign-vue-next';

export const debounceMessage = debounce(
    (errMsg: string, theme: MessageThemeList = 'error') => new Promise<void>((resolve) => {
        MessagePlugin(theme, {
            content: errMsg || '系统异常, 请稍后重试',
            duration: 3000,
            onDurationEnd: () => resolve(),
        });
    }),
    3000,
    {
        leading: true,
        trailing: false,
    },
);

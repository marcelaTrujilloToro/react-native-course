import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {


    const colors = await ImageColors.getColors(uri, {});

    let primary;
    let secondary;

    if (colors.platform === 'ios') {
        primary = colors.primary;
        secondary = colors.secondary;
    } else if (colors.platform === 'android') {
        primary = colors.dominant;
        secondary = colors.average;
    }

    return [primary, secondary];

};

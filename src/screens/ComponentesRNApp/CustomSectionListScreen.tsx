/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';
import { ItemSeparator } from '../../components/ComponentsRNApp/ItemSeparator';
import { ThemeContext } from '../../context/ComponentsRN/themeContex/ThemeContex';
import { casas } from '../../data/ComponentsRN/sectionList';
import { styles } from '../../theme/ComponentsRNApp/appTheme';



export const CustomSectionListScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>

            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={() => <HeaderTitle title="Section list" />}
                ListFooterComponent={()=> (
                  <View style={{marginBottom: 70}}>
                    <HeaderTitle title={`Total de casas: ${casas.length}`}/>
                  </View>
                )}

                stickySectionHeadersEnabled={true}
                renderItem={({ item }) => <Text style={{color: colors.text}}>{item}</Text>}

                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                       <HeaderTitle title={section.casa}/>
                    </View>
                )}
                renderSectionFooter={({section}) => (
                    <HeaderTitle title={`Total: ${section.data.length}`}/>
                )}
                SectionSeparatorComponent={()=> <ItemSeparator/>}

                showsVerticalScrollIndicator={false}
            />

        </View>
    );
};

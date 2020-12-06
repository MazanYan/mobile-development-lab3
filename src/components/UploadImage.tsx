import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ImagePicker from 'react-native-image-picker';
import BottomMenu from './BottomMenu';

const uploadStyles = StyleSheet.create({
    grid: {
        maxHeight: 400
    },
    col1: {
        flex: 1
    },
    col2: {
        flex: 3
    },
    row1: {
        flex: 1,
        aspectRatio: 1
    },
    row2: {
        flex: 1,
        aspectRatio: 1
    }
});

//@ts-ignore
export default function UploadImage({ navigation }) {

    const [images, setImages] = useState<any[]>();
    
    let imageComponents;

    useEffect(() => {
        imageComponents = images?.map(image => <Image source={require(image.fileUri)} />);
    }, [images]);

    const uploadImage = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log(response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
              } else {
                const newImages = images;
                newImages?.push({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                  });
                setImages(newImages);
              }
        });
    };

    return (
        <View>
            <Button title='Add Image' onPress={() => uploadImage()} />
            <Grid style={uploadStyles.grid}>
                <Col style={uploadStyles.col1}>
                    <Row style={uploadStyles.row1}>
                        {
                            !!images && images?.length >= 1 && imageComponents[0]!
                        }
                    </Row>
                    <Row style={uploadStyles.row2}>
                        {
                            !!images && images?.length >= 2 && imageComponents[1]!
                        }
                    </Row>
                    <Row style={uploadStyles.row1}>
                        {
                            !!images && images?.length >= 3 && imageComponents[2]!
                        }
                    </Row>
                </Col>
                <Col style={uploadStyles.col2}>
                    {
                        !!images && images?.length >= 4 && imageComponents[3]!
                    }
                </Col>
                <Col style={uploadStyles.col1}>
                    <Row style={uploadStyles.row1}>
                        {
                            !!images && images?.length >= 5 && imageComponents[4]!
                        }
                    </Row>
                    <Row style={uploadStyles.row2}>
                        {
                            !!images && images?.length >= 6 && imageComponents[5]!
                        }
                    </Row>
                    <Row style={uploadStyles.row1}>
                        {
                            !!images && images?.length >= 7 && imageComponents[6]!
                        }
                    </Row>
                </Col>
            </Grid>
            <BottomMenu navigation={navigation}/>
        </View>
    );
}

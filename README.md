# Music-Recommndation-System-for-Spotiify

###Music Recommendation Web Application Based on K-Nearest Neighbours (ANN):
This repository contains a web application that integrates with a music recommendation system, which leverages a dataset of 155,000 audio files, each lasting thirty seconds, utilizing a Approximate Nearest Neighbour implementation to determine rhythmic similarity, as part of a project for the Fundamental of Big Data Analytics (DS) course.

###Dependencies:
*Pandas 
*NumPy
*Librosa
*Flask
*Schikit-learn
*Mongodb
*Spark
##Introduction :
In today’s digital age, music enthusiasts seek more than just a passive listening experience , they crave a personalized journey through a vast soundscape of melodies and rhythms. While platforms like Spotify have revolutionized how we access and enjoy music, there’s always room for innovation and customization.
Enter your own Spotify-esque venture, where you take the reins to curate and navigate your musical world. This project is not just about mimicking existing services; it’s about crafting an experience that resonates with your unique tastes and preferences.To overcome this limitation, we propose the utilisation of K-Nearest Neighbours (KNN), a technique that efficiently identifies similar items within large datasets without requiring exhaustive searches.

###Where Our Solution Differs:
In this project we present a data preprocessing pipeline for a music dataset. It begins by loading metadata from a CSV file and selecting specific columns of interest. Then, it cleans the data by handling missing values and standardizing text fields to lowercase while removing any special characters. Furthermore, it pads the 'Track ID' column to ensure consistency. The resulting dataset is then returned. The key difference in this solution lies in its data cleaning and transformation steps, which involve column renaming, handling missing values, text standardization, and padding. After loading and preprocessing the dataset, the code provides a glimpse of the resulting DataFrame, showing the first ten rows, and then it's commented out. Lastly, there's additional code commented out for exporting the cleaned dataset to a CSV file and for reading and displaying summary information about the dataset, such as non-null counts and data types.
###Why Is Our Approach Better ?
In the provided code snippet, K-Nearest Neighbors (KNN) is applied within a collaborative filtering framework to recommend similar songs based on their feature vectors. Our approach enhances the KNN implementation in several ways:
    1. Customized Feature Selection: We explicitly select relevant features from the dataset for song similarity calculation. By choosing specific features that are likely to capture meaningful aspects of songs, such as audio characteristics or metadata, our approach can lead to more accurate recommendations tailored to musical preferences.
    2. Scalability with Brute Force Algorithm: The KNN model is instantiated with the "brute" algorithm, which computes distances between all pairs of data points. It ensures accurate results without making assumptions about the data's underlying structure. By prioritizing accuracy over computational efficiency, our approach aims to provide high-quality recommendations.
###Downsides of KNN Our Approach Aims to Alleviate:
While KNN-based collaborative filtering offers several advantages, it also has potential downsides that our approach aims to alleviate:
    1. High Computational Cost: KNN involves calculating distances between the query point and all data points in the dataset, which can be computationally intensive, especially for large datasets. Our approach does not directly address this issue, but by selecting relevant features and tuning parameters, we aim to mitigate computational overhead while maintaining recommendation quality.
    2. Curse of Dimensionality: KNN performance may degrade in high-dimensional feature spaces due to the curse of dimensionality, where distances between points become less meaningful as the number of dimensions increases. Our approach focuses on feature selection and customization to mitigate the impact of high dimensionality, ensuring that the selected features capture essential aspects of song similarity effectively.
##Usage:
(app.py )    
This Flask application defines routes for rendering an HTML template and handling POST requests for song recommendations using collaborative filtering with KNN (K-Nearest Neighbors) based on a provided song ID.
(audio.ipynb )
This file  reads audio files from a directory, extracts features including MFCC, spectral centroid, and zero-crossing rate using the librosa library, and combines them into feature vectors for each audio file.
  (Similarity.ipynb)
This file utilize collaborative filtering, specifically KNN (K-Nearest Neighbors), to recommend similar songs based on feature similarity, with data sourced from either a CSV file, MongoDB database, or provided directly as a DataFrame.
(Preprocessing_Data_file.ipynb)
This file  loads and cleanses a music dataset from a directory, standardizing columns, padding track IDs, and removing special characters, before combining and displaying the data.
(Spark.py)
This file uses Spark to load data from MongoDB, applies collaborative filtering with KNN (K-Nearest Neighbors) to recommend similar songs based on cosine similarity, and displays recommendations for a given song ID.
(Script.js)
This JavaScript code adds functionality to a web page for playing, pausing, and stopping audio files, as well as for uploading new audio files and sending an AJAX request to the backend with the name of the most recently played song for recommendations.


##Contributors:
This project is made by :
1) Ahsan Abdul khafiz (i221870@nu.edu.pk)
2) Ali Zaib (i221900@nu.edu.pk)
3) Awais Arshad (i221989@nu.edu.pk)

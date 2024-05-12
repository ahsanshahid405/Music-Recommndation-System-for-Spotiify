from pyspark.sql import SparkSession
from sklearn.neighbors import NearestNeighbors

# Initializing SparkSession
spark = SparkSession.builder \
    .appName("Recommend Similar Songs") \
    .getOrCreate()

# Reading data from MongoDB into a Spark DataFrame
mongo_uri = "mongodb://localhost:27017/my_database.my_collection"  
df = spark.read.format("mongo").option("uri", mongo_uri).load()

# Selecting columns containing features
features_columns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']

# Printing the first 10 rows of the dataset
print("First 10 rows of the dataset:")
df.show(10)

def recommend_similar_songs_collaborative(song_id):
    # Initializing NearestNeighbors model
    model = NearestNeighbors(metric='cosine', algorithm='brute')

    # Fitting the model with data (transposed if songs are rows)
    model.fit(df[features_columns])

    # Finding the row corresponding to the given song_id
    song_row_index = df[df['Track ID'] == int(song_id)].index
    if len(song_row_index) == 0:
        print("Song not found.")
        return

    # Getting the feature vector for the given song
    song_features = df.iloc[song_row_index][features_columns]

    # Findingk nearest neighbors
    k_neighbors = 11  # Including the song itself
    distances, indices = model.kneighbors(song_features, n_neighbors=k_neighbors)

    # Extracting information about the recommended songs and their similarity scores
    recommended_songs_info = df.iloc[indices[0]][['Track ID', 'Title', 'Artist', 'Album', 'Genre']]
    similarity_scores = 1 - distances.flatten()  # Cosine similarity scores
    recommended_songs_info['Similarity'] = similarity_scores

    return recommended_songs_info

# Recommend similar songs to Track ID 140
song_id = '140'  # Track ID 140
print("\nRecommended similar songs to Track ID 140:")
recommendations_collab = recommend_similar_songs_collaborative(song_id)
print(recommendations_collab)


# Stop SparkSession
spark.stop()


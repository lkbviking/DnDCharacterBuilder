# DnDCharacterBuilder

Helps you build a DnD Character from scratch



Each question adds or removes weight from certain fundamental pieces of a character. 

This means each answer will have an associated array of weights that will be added to the character's totals.

This means that each array of weights will consist of the weights it is modifying and the magnitude of the changes.

Each individual weight will be the named affinity and its magnitude.

At the end the summed weights will be subtracted from each build in our database and the closest match will be returned.


// Should apathy be a factor? i.e. if the user doesn't care about a certain aspect of the character, should it be weighted less?

weights are 2D with their opinion and the degree to which they care about it.
# nodejs-stream
Comment out each section(1st way,2nd way, etc) and test to see it all gives the same output

                                                            NODE JS STREAMS
Streams are objects that let you read data from a source or write data to a destination in continuos fashion.
Streaming means listening to music or watching video in "real time", instead of downloading a file to you computer
and watching it later.

In node js there are fou types of streams -

Readable - Stream which used for read operation
Writeable - Stream which used for write operation
Duplex - Stream which can be used for both read and write operation
Transform - A type of duplex stream where the output is computed based on input

Each type of Stram is an EventEmitter instance and throws several events at a diffeent instance of times. 

Some of the commonly used events are-
1. data - This event is fired when there is data available to read
2. end  - This event is fired when there is no more data to read.
3. error - This event is fired when there is any error on receiving or writing data
4. finish -The ‘finish’ event in a Writable Stream is emitted after the Calling of writable.end() method when all the data is being flushed to the hidden system.g


                 stream with PIPE
 stream.pipe(), the method used used to take a readable stream and connect it to a writable stream                
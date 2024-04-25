FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=./output/control_user.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
<template>
  <div>
    <h1>Herzlich Willkommen</h1>
    <v-container>
      <v-layout row>
        <v-flex>
          <div class="logo">
            <img src="@/assets/HAW-logo.png"
            height="320px"
            width="480px">
          </div>
        </v-flex>
        <v-flex>
          <v-container>
            <v-layout row>
              <v-flex xs12>
                <h4>Anmelden</h4>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex>
                <v-form>
                  <v-layout row>
                    <v-flex xs12 sm6 md3>
                      <v-text-field
                      label="Outline"
                      placeholder="Placeholder"
                      outline
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
